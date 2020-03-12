/**
 * Question - 2
 */

const companies = [
  {
    name: "Company One",
    category: "Finance",
    start: 1981,
    end: 2004,
    employees: 1000
  },
  {
    name: "Company Two",
    category: "Retail",
    start: 1992,
    end: 2008,
    employees: 2000
  },
  {
    name: "Company Three",
    category: "Auto",
    start: 1999,
    end: 2007,
    employees: 500
  },
  {
    name: "Company Four",
    category: "Retail",
    start: 1989,
    end: 2010,
    employees: 100
  },
  {
    name: "Company Five",
    category: "Technology",
    start: 2009,
    end: 2014,
    employees: 10000
  },
  {
    name: "Company Six",
    category: "Finance",
    start: 1987,
    end: 2010,
    employees: 200
  },
  {
    name: "Company Seven",
    category: "Auto",
    start: 1986,
    end: 1996,
    employees: 1000
  },
  {
    name: "Company Eight",
    category: "Technology",
    start: 2011,
    end: 2016,
    employees: 1000
  },
  {
    name: "Company Nine",
    category: "Retail",
    start: 1981,
    end: 1989,
    employees: 1000
  }
];

/**
 * a. print all company names and categories
 */

companies.forEach((com) => console.log(com.name))

/**
* b. use filter to print the company details of only the retail companies
*/

const comRetail = companies.filter((com) => com.category === 'Retail')

console.log(comRetail);

/**
 * c. print the details of companies that started in 80s
 */

const comStart80s = companies.filter((com) => {
    if (com.start >= 1980 && com.start < 1990)
        return com;
});
console.log(comStart80s);

/**
 * d. print an array containing only name of companies
 */
const comNames = companies.map((com) => com.name)

console.log(comNames);

/**
 * e. print the array of objects containing the    company name and duration in the format
name [startYear - endYear]
//  */

const durObj = companies.map((com) =>  `${com.name} : [${com.start} -${com.end}]` )

console.log(durObj);

/**
 * f. sort the array by start year
 */

const sortedCom = companies.sort((c1, c2) => c1.start-c2.start);

console.log(sortedCom);

/**
 * g. print the total number of employees
 */

const totalEmp = companies.reduce((total, com) => com.employees + total, 0);

console.log("Total Employee : " + totalEmp);

/**
  * h. Create an array containing retail companies that started before 1985, followed by
sorting them in descending order based on start year, finally, sum the employees in the
array (Use chaining of functions).
  */

const finalArr = companies
    .filter((com) => com.category == 'Retail')
    .filter((com) => com.start >= 1980 && com.start <= 1990)
    .sort((c1, c2) => c1.start - c1.start)

console.log(finalArr)

const finalEmp = finalArr.reduce((totalEmp, com) => totalEmp + com.employees, 0)

console.log(finalEmp);


