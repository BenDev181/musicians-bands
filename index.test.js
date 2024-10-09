const { create } = require('../../sequelizeSetup/src/models');
const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        const createdBand = await Band.create({name: "Arctic Monkeys", genre: "Indie"})
        expect(createdBand.name).toBe("Arctic Monkeys");
    })

    test('can create a Musician', async () => {
        const createdMusician = await Musician.create({name: "Taylor Swift", genre: "Pop"})
        expect(createdMusician.name).toBe("Taylor Swift");
    })

    test('can update a Band', async () => {
        const createdBand = await Band.create({name: "Arctic Monkeys", genre: "Indie"})
        const updatedBand = await createdBand.update({name: "The Beatles"})
        expect(updatedBand.name).toBe("The Beatles");
    })

    test('can update a Musician', async () => {
        const createdMusician = await Musician.create({name: "Taylor Swift", genre: "Pop"})
        const updatedMusician = await createdMusician.update({name: "Post Malone"})
        expect(updatedMusician.name).toBe("Post Malone");
    })

    test('can delete a Band', async () => {
        const createdBand = await Band.create({name: "Arctic Monkeys", genre: "Indie"})
        const deletedBand = await createdBand.destroy()
        expect(deletedBand.name).toBe("Arctic Monkeys");
    })

    test('can delete a Musician', async () => {
        const createdMusician = await Musician.create({name: "Taylor Swift", genre: "Pop"})
        const deletedMusician = await createdMusician.destroy()
        expect(deletedMusician.name).toBe("Taylor Swift");
    })
})