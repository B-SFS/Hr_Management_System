let administration = {
    noOfEmps: 0,
    totSalary: 0,
    avarage: 0
};

let marketing = {
    noOfEmps: 0,
    totSalary: 0,
    avarage: 0
};

let development = {
    noOfEmps: 0,
    totSalary: 0,
    avarage: 0
};

let finance = {
    noOfEmps: 0,
    totSalary: 0,
    avarage: 0
};

let employees = generatEmpsFromLocalStorage();

function getDepartmentsData(){

    for(let emp of employees){

        if(emp.department == "Administration"){
            administration.noOfEmps++;
            administration.totSalary += emp.salary;
        }
        else if(emp.department == "Marketing"){
            marketing.noOfEmps++;
            marketing.totSalary += emp.salary;
        }
        else if(emp.department == "Development"){
            development.noOfEmps++;
            development.totSalary += emp.salary;
        }
        else if(emp.department == "Finance"){
            finance.noOfEmps++;
            finance.totSalary += emp.salary;
        }
    }

    administration.avarage = administration.totSalary / administration.noOfEmps;
    marketing.avarage = marketing.totSalary / marketing.noOfEmps;
    development.avarage = development.totSalary / development.noOfEmps;
    finance.avarage = finance.totSalary / finance.noOfEmps;

}

function renderTableHeader(){

    let main = document.getElementsByTagName("main")[0];

    let table = document.createElement('table');

    let tr = document.createElement('tr');

    let th = document.createElement('th');
    th.innerHTML = "Department"

    let th1 = document.createElement('th');
    th1.innerHTML = "no. of employees";

    let th2 = document.createElement('th');
    th2.innerHTML = "tot. salary";

    let th3 = document.createElement('th');
    th3.innerHTML = "Average";

    tr.appendChild(th);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);

    table.appendChild(tr);

    main.appendChild(table);

}

function addRowToTable(department, noOfEmps, totSalary, avarage){

    let table = document.getElementsByTagName('table')[0];

    let tr = document.createElement('tr');

    let tdName = document.createElement('td');
    let tdNoOfEmps = document.createElement('td');
    let tdTotSalary = document.createElement('td');
    let tdAvarage = document.createElement('td');

    tdName.innerHTML = department;
    tdNoOfEmps.innerHTML = noOfEmps;
    tdTotSalary.innerHTML = totSalary;
    tdAvarage.innerHTML = avarage;

    tr.appendChild(tdName);
    tr.appendChild(tdNoOfEmps);
    tr.appendChild(tdTotSalary);
    tr.appendChild(tdAvarage);

    table.appendChild(tr);
}

function generatEmpsFromLocalStorage(){

    let generatedEmps = [];
    var getJson = localStorage.getItem('Employees')

    if(getJson != null){
        generatedEmps = JSON.parse(getJson);
    }

    return generatedEmps;
}


getDepartmentsData();
renderTableHeader();
addRowToTable("Administration", administration.noOfEmps, administration.totSalary, administration.avarage);
addRowToTable("Marketing", marketing.noOfEmps, marketing.totSalary, marketing.avarage);
addRowToTable("Development", development.noOfEmps, development.totSalary, development.avarage);
addRowToTable("Finance", finance.noOfEmps, finance.totSalary, finance.avarage);