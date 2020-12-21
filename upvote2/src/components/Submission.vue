<template>
    <div style="display: flex; width: 100%">
        <figure class="media-left">
            <img class="image is-64x64" :src="`${publicPath}images/submissions/${submission.submissionImage}`" alt="">
        </figure>
        <div class="media-content">
            
            <p>
                <strong>
                    <a :href="submission.url">{{ submission.title}}</a>
                    <span class="tag is-small">{{ submission.id }}</span>
                </strong>
                <br>
                {{ submission.description}}
                <br>
                <small>
                    Submmitted by: 
                    <img class="image is-24x24" :src="`${publicPath}images/avatars/${submission.avatar}`" alt="">
                </small>
            </p>
            
        </div>
        <div class="media-right">
            <span class="icon is-smaill" @click="vote">
                <i class="fas fa-angle-up"></i>
                <strong class="has-text-info">{{ submission.votes }}</strong>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Submission",
    props: ["submission"],
    methods: {
        vote() {
            this.submission.votes ++;
        }
    },
    data(){
        return {
            publicPath: process.env.BASE_URL
        }
    }
}
</script>

<style>

</style>
