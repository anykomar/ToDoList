'use strict'
let openPopup = document.querySelector('.create-btn'),
    popup = document.querySelector('.popup'),
    taskForm = document.querySelector('.create-task'),
    saveBtn = taskForm.querySelector('[type="submit"]'),
    tasksArr = JSON.parse(window.localStorage.getItem('tasks')) || [],
    filterArr = [],
    tasksContainer = document.querySelector('#tasks'),
    filter = document.querySelector('.filter'),
    filterSearch = filter.querySelector('[type="search"]'),
    filterPriority = filter.querySelector('[name="priority"]'),
    filterStatus = filter.querySelector('[name="status"]');
let resetForm = () => {
    let fields = taskForm.querySelectorAll('input, select, textarea');
    fields.forEach((el) => {
        if(el.getAttribute('name') == 'priority'){
            el.value = 1
        }else{
            el.value = ''
        }
    })
}
let templateTask = (data) => {
    let html = '';
    let createTemplate = (object) => {
        let template =
            `
            <div class="tasks__block" data-id="${object.id}">
                <h2 class="tasks__title">${object.title}</h2>
                <p class="tasks__desc">${object.description}</p>
                <footer class="tasks__footer">
                    <p class="tasks__priority">${object.priority.name}</p>
                    <select name="status" class="tasks__status">
                        <option value="0" ${object.status.value != 2?'selected':''}>...</option>
                        <option value="2" ${object.status.value == 2?'selected':''}>done</option>
                        <option value="1" disabled>edit</option>
                        <option value="3" disabled>delete</option>
                    </select>
                </footer>
            </div>
        `;
        return template
    }
    data.forEach(el => {
        html += createTemplate(el);
    })
    tasksContainer.innerHTML = html;
    changeStatus();
}
let filterData = () => {
    let filterField = filter.querySelectorAll('input, select'),
        filterObj = {};
    filterField.forEach(el => {
        filterObj[el.getAttribute('name')] = el.value;
    })
    filterArr = tasksArr.filter(el => {return el.title.indexOf(filterObj['search']) != -1});
    filterArr = filterArr.filter(el => {
        if(parseInt(filterObj['priority']) != 0){
            return el.priority.value == parseInt(filterObj['priority']);
        }else {
            return filterArr;
        }
    });
    filterArr = filterArr.filter(el => {
        if(parseInt(filterObj['status']) != 0){
            if(parseInt(filterObj['status']) == 2){
                return el.status.value == parseInt(filterObj['status']);
            }else{
                return el.status.value != 2;
            }

        }else {
            return filterArr;
        }
    });
    templateTask(filterArr);
}
let changeStatus = () => {
    let tasksStatus = tasksContainer.querySelectorAll('.tasks__status');
    tasksStatus.forEach(field => {
        field.addEventListener('change', function (e) {
            let tasksId = parseInt(field.closest('.tasks__block').dataset.id),
                task = tasksArr.filter(el => {return el.id == tasksId})[0];
            task.status.value = field.value;
            task.status.name = field.options[field.selectedIndex].text;
            window.localStorage.setItem('tasks', JSON.stringify(tasksArr));
        })
    })

}
if(tasksArr.length > 0){
    templateTask(tasksArr);
}

openPopup.addEventListener('click', function () {
    popup.classList.add('active');
})
popup.addEventListener('click', function (e) {
    let target = e.target;
    if(target.classList.contains('popup') || target.getAttribute('type') == 'reset'){
        resetForm();
        popup.classList.remove('active');
    }
});
saveBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let fields = taskForm.querySelectorAll('input, select, textarea'),
        data = {};
    fields.forEach((el) => {
        if(el.tagName == 'SELECT'){
            let obj = {},
                option = el.options[el.selectedIndex].text;
            obj['value'] = el.value;
            obj['name'] = option;
            data[el.getAttribute('name')] = obj;
        }else{
            data[el.getAttribute('name')] = el.value;
        }
    })
    data['status'] = {name: 'open', value: 0};
    data['id'] = tasksArr.length + new Date().getUTCMilliseconds();
    tasksArr.push(data);
    templateTask(tasksArr)
    popup.classList.remove('active');
    resetForm();
    filterData();
    window.localStorage.setItem('tasks', JSON.stringify(tasksArr));
})
filterSearch.addEventListener('input', function (e) {
    filterData();
})
filterPriority.addEventListener('change', function (e) {
    filterData();
})
filterStatus.addEventListener('change', function (e) {
    filterData();
})