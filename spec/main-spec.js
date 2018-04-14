const beersong = require('../main/main');
const lyrics = require('../main/lyrics');
describe('print lyrics', () => {
    it('all correct', function () {
        let num = 99
        // let lyrics = lyrics()
        let result = beersong(num)
        expect(result).toEqual(lyrics())
    })
})