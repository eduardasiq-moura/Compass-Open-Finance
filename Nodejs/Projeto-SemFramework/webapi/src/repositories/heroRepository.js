//Vai manipular os dados do banco de dados

const { readFile, writeFile } = require('fs/promises')

class HeroRepository{
    constructor({file}){
        this.file = file
    }
    async _currentFileContent(){
        return JSON.parse(await readFile(this.file))
    }

    async find(itemID){
        const all = await this._currentFileContent()
        if (!itemID) return all

        return all.find(({id}) => itemID === id)

    }
    async create(data){
       const currentFile = await this._currentFileContent()
       currentFile.push(data)

       await writeFile(this.file, JSON.stringify(currentFile))
       return data.id
    }
}

module.exports = HeroRepository

//Teste para ver se ta funcionando
//const heroRepository = new HeroRepository({
 //   file: './../../database/data.json'
//})
//heroRepository.create({id:2, name:'Namu'})
    //.then(console.log)
    //.catch(error => console.log('error', error))
//heroRepository.find().then(console.log).catch(error => console.log('error'))