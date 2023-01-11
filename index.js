let employee = {
    name: 'Casey',
    streetAddress: '21 Jump Street'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    let employees = {...employee};
    employees[key] = value;
    return employees;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    let employees = {...employee};
    delete employees[key];
    return employees;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}