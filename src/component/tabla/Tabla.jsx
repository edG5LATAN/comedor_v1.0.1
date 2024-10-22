import React from 'react'

function Tabla() {
  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#id</th>
      <th scope="col">orden</th>
      <th scope="col">cantidad</th>
      <th scope="col">precio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Amburgueza</td>
      <td>2</td>
      <td>90 <span>Lps</span></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Malteada</td>
      <td>1</td>
      <td>50 <span>Lps</span></td>
    </tr>
    <tr className="bg-dark">
      <th scope="row">total</th>
      <td>total</td>
      <td>4</td>
      <td>140 <span>Lps</span></td>
    </tr>
  </tbody>
</table>
  )
}

export default Tabla
