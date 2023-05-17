const app = Vue.createApp ({

    data () {
        return {
            arrMails: []
        }
    },

    methods: {

    },

    created() {
        for (i = 0; i < 10; i++){
            axios.get ('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(Serverresponse => console.log(Serverresponse.data.response))
        }
    },

});

app.mount('#app');