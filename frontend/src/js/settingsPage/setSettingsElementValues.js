'use strict'

/* global markSearchSettings: true */

import {
  dbLocationInfoTitle$,
  prebrowsingCheckbox$,
  alwaysDisableTooltipsCheckbox$,
  bookmarkExpiryCheckbox$,
  bookmarkExpiryEmail$,
  bookmarkExpirySelectMonths$,
  dbLocationText$,
  trayIconColor$
} from './settingsPage'

function setSettingsElementValues() {
  dbLocationInfoTitle$.text('Current Database Location:')
  if(markSearchSettings.prebrowsing){
    prebrowsingCheckbox$.prop('checked', true)
    prebrowsingCheckbox$.parent().addClass('checked')
  }
  if(markSearchSettings.alwaysDisableTooltips){
    alwaysDisableTooltipsCheckbox$.prop('checked', true)
    alwaysDisableTooltipsCheckbox$.parent().addClass('checked')
  }
  dbLocationText$.text(markSearchSettings.pagesDBFilePath.slice(0, -19))
  if(markSearchSettings.bookmarkExpiryEnabled){
    bookmarkExpiryCheckbox$.prop('checked', true)
    bookmarkExpiryCheckbox$.parent().addClass('checked')
  }
  bookmarkExpiryEmail$.val(markSearchSettings.bookmarkExpiryEmail)
  bookmarkExpirySelectMonths$.val(markSearchSettings.bookmarkExpiryMonths)
  trayIconColor$.val(markSearchSettings.trayIconColor)
}

export { setSettingsElementValues }