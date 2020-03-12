//alert("this Worked.");


//Events on Buttons............

let mResult;
let mOperator;

let isEqualDisable = true;

const mInput = document.querySelector('.calculator-screen');

function write(event) {

    //for the very first input.
    const inVal = event.target.value;

    (mInput.value === '0') ? mInput.value = '' : '';

    mInput.value = mInput.value + inVal;

}

const mButtons = document.querySelectorAll('button')

for (let index = 0; index < mButtons.length; index++) {

    mButtons[index].addEventListener('click', write);

}



//Events on Operators..................


function doCalc(lValue, rValue, op) {
    switch (op) {
        case '+':
            return (parseFloat(lValue) + parseFloat(rValue)).toString();
            break;
        case '-':
            return (parseFloat(lValue) - parseFloat(rValue)).toString();
            break;
        case '*':
            return (parseFloat(lValue) * parseFloat(rValue)).toString();
            break;
        case '/':
            return (parseFloat(lValue) / parseFloat(rValue)).toString();
            break;
        default:
            break;
    }
}

function calC(event) {

    const op = event.target.value;

    //alert(op);
    switch (op) {

        case '+':

            if (mResult === undefined) {
                mResult = mInput.value;    //
                mOperator = op;
            }

            else {

                let vals = (mInput.value).split(mOperator);

                let lValue = mResult;   //first value
                let rValue = vals[1];   //second value.

                if (rValue == NaN) {
                    rValue = 0;
                }

                mResult = doCalc(lValue, rValue, mOperator);

                mOperator = op;

                mInput.value = mResult + op;
            }

            break;

        case '-':

            if (mResult === undefined) {
                mResult = mInput.value;    //
                mOperator = op;
            }

            else {

                let vals = (mInput.value).split(mOperator);

                let lValue = mResult;   //first value
                let rValue = vals[1];   //second value.

                if (rValue == NaN) {
                    rValue = 0;
                }

                mResult = doCalc(lValue, rValue, mOperator);
                mOperator = op;
                mInput.value = mResult + op;
            }
            break;

        case '*':
            if (mResult === undefined) {
                mResult = mInput.value;    //
                mOperator = op;
            }

            else {

                let vals = (mInput.value).split(mOperator);

                let lValue = mResult;   //first value
                let rValue = vals[1];   //second value.

                if (rValue == NaN) {
                    rValue = 0;
                }

                mResult = doCalc(lValue, rValue, mOperator);

                mOperator = op;

                mInput.value = mResult + op;
            }
            break;

        case '/':
            if (mResult === undefined) {
                mResult = mInput.value;    //
                mOperator = op;
            }

            else {

                let vals = (mInput.value).split(mOperator);

                let lValue = mResult;   //first value
                let rValue = vals[1];   //second value.



                if (rValue == NaN) {
                    rValue = 0;
                }

                if (rValue === '0')
                {
                    mInput.value = 'Error: Devide by Zero'
                    mResult = undefined;
                    mOperator = undefined;
                    break;
                }

                mResult = doCalc(lValue, rValue, mOperator);

                mOperator = op;

                mInput.value = mResult + op;
            }
            break;

        case "all-clear":
            mInput.value = '0'
            mResult = undefined;
            mOperator = undefined;
            break;

        default:// Operator :  ' = '
            break;

    }
}

const mOperatorButtons = document.querySelectorAll('.operator');
const allClearButton = document.querySelector('.all-clear');
allClearButton.addEventListener('click', calC)
for (let index = 0; index < mOperatorButtons.length; index++) {
    const element = mOperatorButtons[index];
    element.addEventListener('click', calC);
}
