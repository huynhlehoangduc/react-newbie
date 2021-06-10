import reducer from "./hobby";
import * as actions from '../actions/hobby';


describe('Hobby reducer', () => {
    it('Should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            list: [],
            activeHobby: null
        })
    })

    it('Should handle ADD_HOBBY', () => {
        expect(
            reducer(undefined, actions.addHobby({id: 1, name: 'Hobby 1'}))
        ).toEqual({
            list: [{id: 1, name: 'Hobby 1'}],
            activeHobby: null
        })

        expect(
            reducer(
                {
                    list: [{id: 1, name: 'Hobby 1'}],
                    activeHobby: null
                },
                actions.addHobby({id: 2, name: 'Hobby 2'})
            )
        ).toEqual({
            list: [{id: 1, name: 'Hobby 1'}, {id: 2, name: 'Hobby 2'}],
            activeHobby: null
        })
    })
})
