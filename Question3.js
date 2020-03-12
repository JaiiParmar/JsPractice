/**
 * 3. Consider the eventProp.html in the Lecture folder


 a. Add event listeners to each of the HTML elements    including body, section, p, a and
button. Print the target, currentTarget and eventPhase properties for each event handler.

(Note: eventPhase property describes the phase of the event propagation. phase: 1 for
capturing phase, 2 for target phase, 3 for bubbling phase and 0 for none)

b. If the answer input is empty, do not let the user view the result i.e. the link’s default
action should be prevented. Check if the event is cancelable using cancelable property
of events, in that case prevent the default action of the event from occurring.

c. Unless the input field has a valid phone number, do not let the submit button submit
the forms

d. If the event originated from the paragraph element, do not let the event propagate any
further.

*/

//alert('This is just a check');


//A

function clicked(event) {

    let ePhase = event.eventPhase;
    switch (ePhase) {
        case 0:
            console.log("Event.NONE");
            break;
        case 1:
            console.log("Event.CAPTURING_PHASE");
            break;
        case 2:
            console.log("Event.AT_TARGET");
            break;
        case 3:
            console.log("Event.BUBBLING_PHASE");
            break;
        default: break;
    }
}

const mBody = document.querySelector('section');
mBody.addEventListener('click', clicked);

const mSection = document.querySelector('section');
mSection.addEventListener('click', clicked);

const mP = document.querySelector('p');
mP.addEventListener('click', clicked);

const mA = document.querySelector('a');
mA.addEventListener('click', clicked);

const mButton = document.querySelector('button');
mButton.addEventListener('click', clicked);



//B

function checkInput(event) {

    const mAnswer = document.getElementById('ans');

    if (mAnswer.value === '') {
        //prevent dafault action of <a>
        event.preventDefault();
    }

}

mA.addEventListener('click', checkInput);



//C

function checkPhoneNo(event) {
    const mInput = document.getElementById('mobNo');
    //let say, this is the phone number format.
    let phoneno = "1234567890";

    if (mInput.value !== phoneno)
    {
        event.preventDefault();
    }
    else {
        alert("OK! TESTED.");
    }
}

mButton.addEventListener('click', checkPhoneNo);



//D

function stopProp(event) {
    event.stopPropagation();
}
mP.addEventListener('click',stopProp);