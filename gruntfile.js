module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            },
        },
        watch: {
            less: {
                files: ['main.less'],
                tasks: ['less:development']
            },
            javascript: {
                files: ['main.js'],
                tasks: ['uglify:target']
            },
        },
        
        uglify: {
            target: {
                files: {
                    'main.min.js':'*main.js' 
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less', 'uglify']);
}