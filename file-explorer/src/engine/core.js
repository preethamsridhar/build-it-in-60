/**
 * file-explorer
 *  public
 *      index.html
 *  src
 *      components
 *          filefolder
 *              index.js
 *      engine
 *          core.js
 *  App.js
 *  package.json
 *  
 * 
 * 
 * 
 * 
 */

export const fileExplorerConfig = {

    byId: {
        id1: {
            name: 'public',
            type: 'folder',
            id: 'id1'
        },
        id2: {
            name: 'src',
            type: 'folder',
            id: 'id2'
        },
        id3: {
            name: 'components',
            type: 'folder',
            id: 'id3'
        },
        id4: {
            name: 'filefolder',
            type: 'folder',
            id: 'id4'
        },
        id5: {
            name: 'engine',
            type: 'folder',
            id: 'id5'
        },
        id6: {
            name: 'index.html',
            type: 'file',
            id: 'id6'
        },
        id7: {
            name: 'index.js',
            type: 'folder',
            id: 'id7'
        },
        id8: {
            name: 'styles.css',
            type: 'file',
            id: 'id8'
        },
        id9: {
            name: 'core.js',
            type: 'file',
            id: 'id9'
        },
        id10: {
            name: 'package.json',
            type: 'file',
            id: 'id10'
        },
        id11: {
            name: 'App.js',
            type: 'file',
            id: 'id10'
        },
    },
    parentToChild: {
        root: ['id1', 'id2', 'id10', 'id11'], 
        id1: ['id6'], 
        id2: ['id3', 'id5'], 
        id3: ['id4'], 
        id4: ['id7'], 
        id5: ['id9'], 
    }
}

