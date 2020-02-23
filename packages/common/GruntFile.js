module.exports = function(grunt) {
  grunt.initConfig({
    sync: {
      main: {
        files: [
          {
            cwd: ".",
            src: ["./*.json", "./*.js", "./*.tsx", "./src/**", "./dist/**"],
            dest: "../mobile/node_modules/@monorepo/common"
          }
        ],
        pretend: false,
        verbose: true,
        updateAndDelete: true
      }
    },
    watch: {
      myfiles: {
        files: ["**"],
        tasks: ["sync:main"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-sync");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.registerTask("default", "watch");
};
