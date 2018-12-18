export const updateObject = (oldObject, updatedValue) => {
    return {
        ...oldObject,
        ...updatedValue
    }
}