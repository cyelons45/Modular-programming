requirejs.config({
    baseUrl: 'lib',
    paths:{
        app:"../app",
        jquery:"https://code.jquery.com/jquery-2.2.4.min"
    }
        
})

requirejs(['app/main'])
// requirejs(['app/Calculator'])