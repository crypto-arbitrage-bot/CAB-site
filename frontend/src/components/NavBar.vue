<template>
    <nav id="nav">
        <a href="/"><img src="@/assets/logo.png" alt="CAB logo" id="logo" ref="Home"></a>
        <ul id="links">
            <li ref="About"> <h1><a href="/about">About</a></h1></li>
            <li ref="Install"><h1><a href="/install">Install</a></h1></li>
            <li ref="Contact"><h1><a href="/contact">Contact</a></h1></li>
        </ul>
    </nav>
</template>

<style scoped>

#links li {
    padding-right: 20px;
}

#nav ul {
    list-style: none;
    padding-right: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left:auto;
}

#nav {
    position: relative;
    top: 0;
    height: 100%;
    display: flex;
    flex-direction: row;
}
</style>