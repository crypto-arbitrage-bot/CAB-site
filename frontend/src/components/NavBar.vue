<template>
    <nav id="nav">
        <RouterLink to="/"><img src="@/assets/logo.png" alt="CAB logo" id="logo" ref="Home"></RouterLink>
        <ul id="links">
            <li ref="About">
                <h1>
                    <RouterLink to="/about">About</RouterLink>
                </h1>
            </li>
            <li ref="Install">
                <h1>
                    <RouterLink to="/install">Install</RouterLink>
                </h1>
            </li>
            <li ref="Contact">
                <h1>
                    <RouterLink to="/contact">Contact</RouterLink>
                </h1>
            </li>
            <li ref="Contact">
                <h1><a href="https://github.com/crypto-arbitrage-bot">GitHub</a></h1>
            </li>
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
    margin-left: auto;
}

#nav {
    position: relative;
    top: 0;
    height: 100%;
    display: flex;
    flex-direction: row;
}
</style>