const employee = {
    name: "Daniel",
    street: "Ave R",
}





function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employees = {...employee};
    employees[key] = value;
    return employees
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const worker = {...employee};
    delete worker[key];
    return worker;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}