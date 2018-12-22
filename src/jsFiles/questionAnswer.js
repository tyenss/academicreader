export default class questionAnswer {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }

    getAnswer() {
        return this.answer;
    }

    getQuestion()
    {
        return this.question;
    }
}
