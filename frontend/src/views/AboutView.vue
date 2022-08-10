<template>
  <div class="about">
    <h1>About CAB and the Developers</h1>
    <div class="content">
      <div class="left">
        <h1>Crypto Arbitrage Bot (CAB)</h1>
        <div class="desc">
          CAB is a Python program that can detect arbitrage and output a router
          for it. The router consists of multiple buy and sell processes from
          different exchanges. Users have the choice to follow the instructions
          and execute transactions, generating potential profit. Its features
          include:
          <ul>
            <li>The Arbitrage Strategy Computation</li>
            <li>API Options</li>
            <li>Transaction Link Filters</li>
            <li>History Export</li>
          </ul>
        </div>
      </div>
      <div class="right" style="margin: 5% auto;">
        <h1>Developers</h1>
        <table id="members">
          <tbody>
            <tr>
              <th class="table-header">Name</th>
              <th class="table-header">Role</th>
            </tr>
            <tr>
              <td class="name">Ketu Patel</td>
              <td class="role">Product Owner & Python Developer</td>
            </tr>
            <tr>
              <td class="name">Bhavesh Bajaj</td>
              <td class="role">Python Developer</td>
            </tr>
            <tr>
              <td class="name">James Liu</td>
              <td class="role">Full Stack Developer</td>
            </tr>
            <tr>
              <td class="name">Zhongbang Chen</td>
              <td class="role">Documentation</td>
            </tr>
            <tr>
              <td class="name">Suyu Yang</td>
              <td class="role">Documentation</td>
            </tr>
            <tr>
              <td class="name">Sriharsha Tangellamudi</td>
              <td class="role">Documentation</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 0 auto;
}

.about h1 {
  text-align: center;
  font-weight: bold;
}

.content {
  display: flex;
}
.content div {
  margin: 5%;
}
.desc ul {
  margin: 5%;
}
.content .left {
  max-width: 40%;
}

#members {
  width: max-content;
}

.table-header {
  text-decoration: underline;
}

.name {
  padding-right: 5px;
}
.role {
  padding-left: 5px;
  text-align: center;
}
</style>
