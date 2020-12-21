<template>
    <div class="ui container">
        <form class="ui form" @submit="submitForm">
            <div class="field">
                <label for="newItem">newItem: </label>
                <input type="text" v-model="fields.newItem" />
                <span style="float: right">{{ fields.newItem.length }}/20</span> 
                <span style="color:red">{{ fieldErrors.newItemError }}</span>
                <span v-if="isNewItemLimitation" style="color:red;display:block">
                    Must be under 20 character
                </span>
            </div>
            <div class="field">
                <label for="email">Email:</label>
                <input type="text" v-model="fields.email" />
                <span style="color: red">{{ fieldErrors.emailError}}</span>
            </div>
            <div class="field">
                <label for="urgency">urgency</label>
                <select clas="ui fluid search dropdown" v-model="fields.urgency">
                    <option disabled>Please select one option</option>
                    <option value="Nonessential">Nonessential</option>
                    <option value="Moderate">Moderate</option> 
                    <option value="Urgent">Urgent</option> 
                </select>
                <span style="color: red">{{ fieldErrors.urgencyError }}</span>
                <span v-if="isNotUrgency" style="color:red; display: block">
                    not moderate or urgent
                </span>
            </div>
            <div class="field">
                <div class="ui checkbox"> 
                    <input v-model="fields.termsAndConditions" type="checkbox" /> 
                    <label>I accept the terms and conditions</label> 
                    <span style="color:red">{{ fieldErrors.termsAndConditionsError}}</span>
                </div>

            </div>
            <button v-if="saveStatus === 'SAVING'" disabled class="ui button">
                Saving...
            </button>
            <button v-if="saveStatus === 'SUCCESS'"
                :disbaled="isNewItemLimitation || isNotUrgency" 
                class="ui button">
                Saved
                Submit another
            </button>
            <button v-if="saveStatus === 'ERROR'" class="ui button">
                Save failed. retry? 
            </button>
            <button v-if="saveStatus === 'READY'" 
            :disabled="isNewItemLimitation|| isNotUrgency" class="ui button">
                Submit
            </button>
        </form>
        <div class="ui segment">
            <h2 class="ui header"> items : </h2>
            <ul>
                <div v-if='loading' class='ui active inline loader'></div>
                <li v-for="(item,index) in items" :key=index>{{ item }}</li>
            </ul>
        </div>
    </div>
    
</template>

<script>
export default {
    name: "MultiForm",
    data() {
        return {
            fields: {
                newItem: "",
                email: "",
                urgency:"",
                termsAndConditions: false
            },
            items:[],
            fieldErrors:{
                newItemError:undefined,
                emailError:undefined,
                urgencyError:undefined,
                termsAndConditionsError:undefined
            },
            loading: false,
            saveStatus: 'READY' // READY ; SAVING; SUCCESS; ERROR
        }
    },
    computed: {
        isNewItemLimitation () {
            return this.fields.newItem.length >= 20;
        },
        isNotUrgency(){
            return this.fields.urgency === 'Nonessential'
        }

    },
    methods: {
        submitForm(evt){
            evt.preventDefault();
            this.fieldErrors = this.validateForm(this.fields)
            // console.log(this.fieldErrors);
            if(Object.keys(this.fieldErrors).length) return ;
            const items = [...this.items, this.fields.newItem];
            this.saveStatus = 'SAVING';
            this.$apiClient.saveItems(items)
                .then( ()=> {
                    this.items = items;
                    this.fields.newItem = "";
                    this.fields.email = "";
                    this.fields.urgency = "";
                    this.fields.termsAndConditions = false;
                    this.saveStatus = "SUCCESS";
                })
                .catch( err => {
                    console.log(err);
                    this.saveStatus = "ERROR";
                })
        },
        validateForm (fields) {
            const errors = {};
            if (!fields.newItem) errors.newItemError = "New Items Required";
            if (!fields.email) errors.emailError = "Email Required";
            if (!fields.urgency) errors.urgencyError = "Urgency Required";
            if (!fields.termsAndConditions) errors.termsAndConditionsError = "termsAndConditions have to be approved";
            
            if(fields.email && !this.isEmail(fields.email)) {
                errors.emailError = "Invalid Email"
            }
            return errors;
        },
        isEmail (email) {
            const re = /\S+@\S+\.\S+/;
            return re.test(email);
        }
    },
    created () {
        this.loading = true;
        this.$apiClient.loadItems().then( items => {
            this.items = items;
            this.loading =false;
        });
        console.log(this.$apiClient.count);

    }
}
</script>

<style>

</style>
