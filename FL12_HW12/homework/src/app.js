let addNew = document.getElementById('addNew');
let saveChanges = document.getElementById('saveChanges');
let mainPage = document.getElementById('mainPage');
let newPage = document.getElementById('newPage');
let listOfTerms = document.getElementById('listOfTerms');
let setName = document.getElementById('setName');
let AddTerms = document.getElementById('AddTerms');
let term = document.getElementById('term');
let termDefenition = document.getElementById('termDefenition');
let termDefenitionWrap = document.getElementById('termDefenitionWrap');
let cancel = document.getElementById('cancel');
let removeButton = document.getElementById('removeButton');
let editPage = document.getElementById('editPage');
let editTerm = document.getElementById('editTerm');
let editTermDefenition = document.getElementById('editTermDefenition');
let saveEditChanges = document.getElementById('saveEditChanges');
let editCancel = document.getElementById('editCancel');
let nullNumber = 0;
let twoNumber = 2;

addNew.addEventListener('click', function() {
    location.hash = '/add_suffix';
    newPage.style.display = 'block';
    mainPage.style.display = 'none';
    document.getElementById('term').value = '';
    document.getElementById('termDefenition').value = '';
})

removeButton.addEventListener('click', function() {
    document.getElementById('term').value = '';
    document.getElementById('termDefenition').value = '';
})

AddTerms.addEventListener('click', function() {
    if (setName.value !== '') {
        termDefenitionWrap.style.display = 'block'
    }

})
cancel.addEventListener('click', function() {
    location.hash = '';
})

saveChanges.addEventListener('click', mainPageFn)

function mainPageFn() {
    location.hash = '';
    newPage.style.display = 'none';
    mainPage.style.display = 'block';
    let termValue = term.value;
    let termDefenitionValue = termDefenition.value;
    let set = document.createElement('li');
    set.setAttribute('class', 'termItem');
    set.innerHTML = `<span class="termValueSpan">${termValue}</span> - <span class="termDefenitionValueSpan">
    ${termDefenitionValue}</span><button class="edit">Edit</button> 
    <button class="remove">Remove</button><input type="checkbox" class="studied">Studied`
    let olCildes = Array.from(listOfTerms.children);
    if (olCildes.length === nullNumber) {
        listOfTerms.appendChild(set);
        localStorage.setItem('listOfTerms', listOfTerms);
    } else {
        for (let i = 0; i < olCildes.length; i++) {
            if (olCildes[i].children[twoNumber].checked) {
                listOfTerms.insertBefore(set, olCildes[i].children[twoNumber].parentElement);
                break
            } else {
                listOfTerms.appendChild(set);
                localStorage.setItem('listOfTerms', listOfTerms);
            }
        }
    }
    let editButton = Array.from(document.querySelectorAll('.edit'));
    for (let i = 0; i < editButton.length; i++) {
        editButton[i].addEventListener('click', function() {
            editTerm.value = this.parentElement.children[nullNumber].innerHTML;
            editTermDefenition.value = this.parentElement.children[1].innerHTML;
            location.hash = '#/modify/:item_id_suffix';
            saveEditChanges.addEventListener('click', function() {
                let editTermNewValue = editTerm.value;
                let editTermDefenitionNewValue = editTermDefenition.value;
                listOfTerms.children[Array.from(listOfTerms.children).indexOf(editButton[i].parentElement)]
                    .children[nullNumber].innerHTML = editTermNewValue;
                listOfTerms.children[Array.from(listOfTerms.children).indexOf(editButton[i].parentElement)]
                    .children[1].innerHTML = editTermDefenitionNewValue;
                location.hash = '';
                localStorage.removeItem('listOfTerms');
                localStorage.setItem('listOfTerms', listOfTerms);
                return
            });
            return
        })
    }

    editCancel.addEventListener('click', function() {
        location.hash = '';
    })

    let removeButton = Array.from(document.querySelectorAll('.remove'));
    removeButton.forEach(element => {
        element.addEventListener('click', function() {
            this.parentElement.remove();
            localStorage.removeItem('listOfTerms');
            localStorage.setItem('listOfTerms', listOfTerms);
        })
    });

    let studied = Array.from(document.querySelectorAll('.studied'));
    studied.forEach(element => {
        element.addEventListener('change', function() {
            if (element.checked) {
                this.parentElement.remove();
                listOfTerms.appendChild(this.parentElement);
                localStorage.removeItem('listOfTerms');
                localStorage.setItem('listOfTerms', listOfTerms);
            }
        })
    });
}

function locationHashChanged() {
    if (location.hash === '/add_suffix') {
        newPage.style.display = 'block';
        mainPage.style.display = 'none';
    } else if (location.hash === '') {
        newPage.style.display = 'none';
        mainPage.style.display = 'block';
        editPage.style.display = 'none'
    } else if (location.hash === '#/modify/:item_id_suffix') {
        mainPage.style.display = 'none';
        editPage.style.display = 'block'
    }
}
window.onhashchange = locationHashChanged;