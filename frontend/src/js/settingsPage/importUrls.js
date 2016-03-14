'use strict';

import { xhrHeaders, notieAlert$ } from './settingsPage'
import { showAddPageSubbar, hidePageSubbarAndReset } from './hideShowAddPageSubbar'
import { showNotie } from './showNotie'
import { saveUrls } from './saveUrls'
import { getErrorMessage } from './getErrorMessage'

import got from 'got'
import _ from 'lodash'
import validUrl from 'valid-url'

function importUrls(event){
  var eventElement = event.target
  var files = eventElement.files
  if(!files.length){
    return
  }
  var file = files[0]
  var reader = new FileReader()
  /****
   * .path is available in Electron.
   * http://electron.atom.io/docs/all/#file-object
   */
  reader.onload = event => {
    got.post(
      `/frontendapi/settings/checkIfFileIsBinary/${encodeURIComponent(file.path)}`,
      {
        headers: xhrHeaders
      }
    )
    .then( response => {
      var urlsToSave
      var urlsArray
      var fileText = event.target.result
      if(eventElement.dataset.importType === 'html'){
        var bookmarksDoc = document.implementation.createHTMLDocument('')
        bookmarksDoc.body.innerHTML = fileText
        var allAelements = bookmarksDoc.body.querySelectorAll('a')
        urlsArray = _.map(allAelements, element => element.href)
      }
      else{
        urlsArray = fileText.split(/\r?\n/)
      }
      urlsToSave = _.filter(
        urlsArray,
        lineValue => _.trim(lineValue).length && validUrl.isWebUri(lineValue)
      )
      if(!urlsToSave.length){
        showNotie(3, `Error: No URLs Were Found In The File.`, 6)
      }
      else{
        var deDupedUrlsToSave = new Set(urlsToSave)
        saveUrls(deDupedUrlsToSave)
      }
    })
    .catch( err => {
      console.error(err)
      var errorMessage = getErrorMessage(err)
      hidePageSubbarAndReset()
        .then(() => {
          showNotie(3, `There Was An Error Opening The File. Error: ${errorMessage}`, 6)
        })
    })
    reader.onerror = event => {
      console.error(event)
      console.error(reader.error)
      showNotie(3, `There Was An Error Loading The File. Error: ${reader.error.name}`, 6)
      reader.abort()
    }
  }
  showAddPageSubbar().then(() => { reader.readAsText(file) })
}

export { importUrls }





