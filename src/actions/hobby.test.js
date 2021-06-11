import * as actions from './hobby';

describe('actions', () => {
    it('Should create an action to add hobby', () => {
        const hobby = { id: 1, name: 'Hobby1' }
        const expectedAction = {
            type: 'ADD_HOBBY',
            payload: hobby
        }
        expect(actions.addHobby(hobby)).toEqual(expectedAction)
    });
    it('Should create an action to set active hobby', () => {
        const activeHobby = 1;
        const expectedAction = {
            type: 'SET_ACTIVE_HOBBY',
            payload: activeHobby
        }
        expect(actions.setActiveHobby(activeHobby)).toEqual(expectedAction)
    })
})
