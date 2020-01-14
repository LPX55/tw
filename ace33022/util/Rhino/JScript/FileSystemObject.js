/**
 *
 * JScript FileSystemObject
 *
 * @author ace
 *
 * @version 2011/01/03 v0.1
 *
 * @param
 *
 * @returns
 *
 * @see <a href="http://www.mozilla.org/rhino/ScriptingJava.html">Scripting Java</a>
 * @see <a href="http://www.jaceju.net/blog/archives/25">JavaScript 物件類別</a>
 * @see <a href="http://www.exampledepot.com/egs/java.io/ReadLinesFromFile.html">Reading Text from a File</a>
 *
 * @description
 *
 */

// iomode
var ForReading = 1;     // Open a file for reading only. You can't write to this file.
var ForWriting = 2;     // Open a file for writing.
var ForAppending = 8;   // Open a file and write to the end of the file.

FileSystemObject = function () {

    var File = null;
    var BufferedReader = null;
    var BufferedWriter = null;
    var IOMode;
    var CharFormat

    this.GetFile = function (filename) {
        this.File = new java.io.File(filename);
    }

    this.OpenTextFile = function (filename, iomode, format) {

        this.File = new java.io.File(filename);
        this.IOMode = iomode;
        this.CharFormat = format;

        // 依IOMode格式設定BufferedReader或BufferedWriter。
        if (this.IOMode == 1) this.BufferedReader = new java.io.BufferedReader(new java.io.FileReader(this.File.getAbsolutePath()));

        return this;
        // todo:format
    }

    this.ReadAll = function () {

        var strTemp = new String();
        var strResult = new String();

        try {
            if (this.BufferedReader == null) this.BufferedReader = new java.io.BufferedReader(new java.io.FileReader(this.File.getAbsolutePath()));

            while ((strTemp = this.BufferedReader.readLine()) != null) strResult += strTemp + "\n";

            return strResult;
        }
        catch (e) {
            throw e;
        }
        finally {
            this.BufferedReader.close();
            this.BufferedReader = null;
        }
    }

    this.ReadLine = function () {

        try {
            if (this.BufferedReader == null) this.BufferedReader = new java.io.BufferedReader(new java.io.FileReader(this.File.getAbsolutePath()));

            return this.BufferedReader.readLine();
        }
        catch (e) {
            throw e;
        }
    }

    this.SkipLine = function () {

        try {
            this.ReadLine();
        }
        catch (e) {
            throw e;
        }
    }

    this.Close = function () {
        if (this.BufferedReader != null) this.BufferedReader.close();
        if (this.BufferedWriter != null) this.BufferedWriter.close();
    }
}