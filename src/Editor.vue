<template>

    <!-- or to manually control the datasynchronization（或者手动控制数据流，需要像这样手动监听changed事件） -->
    <codemirror
                :code="code"
                :options="editorOptions"
                @ready="onEditorReady"
                @focus="onEditorFocus"
                @change="onEditorCodeChange">
    </codemirror>
</template>

<script>
    // Similarly, you can also introduce the resource pack you want to use within the component
    // require('codemirror/some-resource')
    import { codemirror, CodeMirror } from 'vue-codemirror'
    import 'codemirror/keymap/sublime'; // <===== Imports
    export default {
        name: 'editor',
        data () {
            return {
                editorOptions: {
                    // codemirror options
                    tabSize: 4,
                    mode: 'text/javascript',
                    theme: 'base16-light',
                    lineNumbers: true,
                    line: true,

                    // 高级配置（需要引入对应的插件包）,codemirror advanced options(You need to manually introduce the corresponding codemirror function script code)
                    // sublime、emacs、vim三种键位模式，支持你的不同操作习惯
                    keyMap: "sublime",
                    // 按键映射，比如Ctrl键映射autocomplete，autocomplete是hint代码提示事件
                    extraKeys: { "Ctrl": "autocomplete" },
                    // 代码折叠
                    foldGutter: true,
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                    // 选中文本自动高亮，及高亮方式
                    styleSelectedText: true,
                    highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
                    // more codemirror options...
                    // 如果有hint方面的配置，也应该出现在这里
                }
            }
        },
        methods: {
            onEditorReady(editor) {
                console.log('the editor is readied!', editor)
            },
            onEditorFocus(editor) {
                console.log('the editor is focus!', editor)
            },
            onEditorCodeChange(newCode) {
                console.log('this is new code', newCode)
                this.$store.dispatch('updateCode', { code: newCode })
            }
        },
        computed: {
            editor() {
                return this.$refs.myEditor.Editor
            },
            code() {
                return this.$store.getters.code
            }
        },
        mounted() {
            console.log('this is current editor object', this.Editor)
            // you can use this.editor to do something...
        }
    }
</script>
<style>
    .CodeMirror {
        height: 100%;
    }
</style>