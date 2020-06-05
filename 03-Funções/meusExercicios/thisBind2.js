function Pessoa(){
    this.idade = 0

    const self = this
    while (self.idade<10){
    setInterval(function(){
        self.idade++

        console.log(self.idade)
    }.bind(this), 1000)}
}

new Pessoa