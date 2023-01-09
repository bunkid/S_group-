

const id = document.getElementById('id');
const name = document.getElementById('name');
const salary = document.getElementById('salary');
const city = document.getElementById('city');
const btn = document.getElementById('btn');
const table = document.getElementById('tr');

let arr = [];

table.innerHTML =
btn.addEventListener('click', function (e) {
      arr.push({name: name.value, salary: salary.value, city: city.value});
      console.log(arr);
      e.preventDefault();
      

      table.innerHTML =`<tr>
      <th>Name</th>
      <th>id</th>
      <th>salary</th>
      <th>city</th>
      </tr>`+ arr.map((item) => {
            return `   <tr> <td>${item.name}</td> <td>${item.salary}</td> <td>${item.city}</td><td>${item.city }</td>      </tr>`
      }).join('');
}
)