class HeroService{
    constructor({ heroRepository}){
        this.heroRepository = heroRepository
    }

    async find(itemID){
        returnthis.heroRepository.find(itemID)
    }

    async find(data){
        return this.heroRepository.create(data)
    }
}

module.exports = HeroService