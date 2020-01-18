mergeInto(LibraryManager.library, {
	
	Hello: function () {
		window.alert("Hello, world!");
	},

	HelloString: function (str) {
		//这里使用Pointer_stringify方法转换unity传递过来的字符串
		window.alert(Pointer_stringify(str));
	},

	PrintFloatArray: function (array, size) {
		for(var i = 0; i < size; i++){
			//遍历float数组使用HEAPF32，更多类型：HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64
			console.log(HEAPF32[(array >> 2) + i]);
		}
	},

	AddNumbers: function (x, y) {
		//这里unity传递过来int类型数字，不需要转换
		return x + y;
	},
	
	//返回一个字符串到unity
	StringReturnValueFunction: function () {
		var returnStr = "bla";
		
		var bufferSize = lengthBytesUTF8(returnStr) + 1;
		var buffer = _malloc(bufferSize);
		stringToUTF8(returnStr, buffer, bufferSize);

		return buffer;
	},

	BindWebGLTexture: function (texture) {
		GLctx.bindTexture(GLctx.TEXTURE_2D, GL.textures[texture]);
	},

});