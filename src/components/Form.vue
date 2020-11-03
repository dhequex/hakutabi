<template>
  <flow-form v-if="submitted === false"
  v-bind:questions="questions" 
  v-bind:language="language" 
  @submit="onSubmit" 
  @complete="onComplete" 
  />
</template>

<script>
  // Import necessary components and classes
  import FlowForm, { QuestionModel, QuestionType } from '@ditdot-dev/vue-flow-form'

  export default {
    name: 'Form',
    components: {
      FlowForm
    },
    props:{
      question: QuestionModel,


    },
    data() {
      return {

        submitted: false,
        completed: false,
        
        questions: [
          // QuestionModel array
          new QuestionModel({
            title: 'Welcome to Hakutabi',
            subtitle: 'Let\'s plan your next Adventure! 😉',
            helpText: 'Let\'s plan your next Adventure! 😉',
            type:QuestionType.Text,
            placeholder:"Tell me your name to start"
          }) 
            ]
      }
    },
    mounted() {
      this.addEventListener('keyup', this.onKeyListener)
    },
    beforeDestroy() {
      this.removeEventListener('keyup', this.onKeyListener)
    },
    methods: {
      onKeyListener($event) {
       
        if ($event.key === 'Enter' && this.completed && !this.submitted) {
          this.onSendData()
        }
      },
      /* eslint-disable-next-line no-unused-vars */
      onComplete(completed, questionList) {
        // This method is called whenever the "completed" status is changed.
        this.completed = completed
      },
      /* eslint-disable-next-line no-unused-vars */
      onSubmit(questionList) {
        // This method will only be called if you don't override the
        // completeButton slot.
        this.onSendData()
      },
      
      onSendData() {
        // Set `submitted` to true so the form knows not to allow back/forward
        // navigation anymore.
        this.$refs.flowform.submitted = true
        this.submitted = true
        /* eslint-disable-next-line no-unused-vars */
        const data = this.getData()
        /*
          You can use Fetch API to send the data to your server, eg.:
          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
        */
      },
      getData() {
        const data = {
          questions: [],
          answers: []
        }
        this.questions.forEach(question => {
          if (question.title) {
            let answer = question.answer
            if (typeof answer === 'object') {
              answer = answer.join(', ')
            }
            data.questions.push(question.title)
            data.answers.push(answer)
          }
        })
        return data
      }
    },
  }
</script>

<style>
  /* Import Vue Flow Form base CSS */
  @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.css';
  @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css';

</style>