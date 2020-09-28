export const calculateExpression = (expression) => {
    return new Function(`return ${expression}`)();
}