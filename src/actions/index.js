export const SHIFT_LEFT = 'SHIFT_LEFT'

export const SHIFT_RIGHT = 'SHIFT_RIGHT'

export const ADD_TASK = 'ADD_TASK'

export const shiftTaskLeft = (task) => ({
  type: SHIFT_LEFT,
  task,
})

export const shiftTaskRight = (task) => ({
  type: SHIFT_RIGHT,
  task,
})

export const addTask = task => ({
  type: ADD_TASK,
  task
})
