import { createSelector } from 'reselect'

const currentUser = state => state.user

export const currentUserState = createSelector(
 [currentUser],
 user => user.currentUser
)