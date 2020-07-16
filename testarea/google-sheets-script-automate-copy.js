function convertExceltoGoogleSpreadsheet2(fileName) {
  var destSpreadsheetID = "1NtqvdcuKAs7AqwPTcEPzAASHc_Y9-CoiA50-LId4QTI"
  var destSheetName = "data"

  try {
    fileName = fileName || "microsoft-excel.xlsx"

    var excelFile = DriveApp.getFilesByName(fileName).next()
    var fileId = excelFile.getId()
    var folderId = Drive.Files.get(fileId).parents[0].id
    var blob = excelFile.getBlob()
    var resource = {
      title: excelFile.getName().replace(/\.xlsx?/, ""),
      key: fileId,
    }

    // instead of inserting the data we actually just want to take contents and paste into this file
    var sourceSpreadsheet = Drive.Files.insert(resource, blob, {
      convert: true,
    })
    // get just first sheet in the excel file
    var sourceSheet = SpreadsheetApp.openById(
      sourceSpreadsheet.id
    ).getSheets()[0]
    //Logger.log(sourceSheet.getName());
    var destinationFile = SpreadsheetApp.openById(destSpreadsheetID)
    //Logger.log(destinationFile.getName());

    var destSheet = destinationFile.getSheetByName(destSheetName)
    var sourceRange = sourceSheet.getDataRange() // we have range
    var lastColumn = sourceRange.getLastColumn()
    var lastRow = sourceRange.getLastRow()
    // Logger.log(sourceRange.getLastColumn());
    // Logger.log(sourceRange.getLastRow());
    var values = sourceRange.getValues() // we have values

    // copy across to the exising tab with new dataset
    destSheet.getRange(1, 1, lastRow, lastColumn).setValues(values)

    // now delete the copy file
    Drive.Files.remove(sourceSpreadsheet.id)
    Logger.log("Cleanup successful.")
  } catch (f) {
    Logger.log(f.toString())
  }
}

convertExceltoGoogleSpreadsheet2("example-file-open-products-status.xlsx")
