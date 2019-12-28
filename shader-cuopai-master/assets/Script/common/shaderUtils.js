
var v_shaderPrograms = {}
var shaderUtils = {

    getGLProgram : function(vert,frag){
		var glProgram = v_shaderPrograms[frag];
		if (!glProgram) {
	        glProgram = new cc.GLProgram();
	        var vertStr = require(vert);
	        //cc.log("vertStr:",vertStr)
	        var fragStr = require(frag);
	        if (cc.sys.isNative) {  
	           glProgram.initWithString(vertStr, fragStr);
	        }else{
	        	glProgram.initWithVertexShaderByteArray(vertStr, fragStr);
	            glProgram.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
	            glProgram.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
	            glProgram.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
	        }
	        glProgram.link();
	        glProgram.updateUniforms();
            glProgram.use();
	        v_shaderPrograms[frag] = glProgram;
	    }
	    return glProgram;
	},

    setData:function(glProgram,type,data,funcount){
        funcount = funcount || 1;
        var funList = [
            {},
            {native:"setUniformFloat",noNative:"setUniformLocationWith1f"},
            {native:"setUniformVec2",noNative:"setUniformLocationWith2f"},
            {native:"setUniformVec3",noNative:"setUniformLocationWith3f"},
        ]
        var cl = funList[funcount];
        glProgram.use();
        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(glProgram);
            glProgram_state[cl.native](type,data);
        }else{
            var td = glProgram.getUniformLocationForName(type);
            if (funcount == 1){
                glProgram[cl.noNative](td,data);
            }else if (funcount == 2){
                glProgram[cl.noNative](td,data.x,data.y);
            }else if (funcount == 3){
                glProgram[cl.noNative](td,data.x,data.y,data.z);
            }
        }
    },

    setShaderByFileName:function(node,vert,frag) {
    	var glProgram = shaderUtils.getGLProgram(vert,frag)
    	//cc.log(">>>>>>>>>>>>>>>glProgram:",glProgram)
    	shaderUtils.setShaderByProgram(node,glProgram)

        return glProgram
    },

    setShaderByProgram: function(node, glProgram) {
    	if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(glProgram);
            node.setGLProgramState(glProgram_state);
        }else{
            node.setShaderProgram(glProgram);    
        }

        var children = node.children;
        if (!children)
            return;
    
        for (var i = 0; i < children.length; i++)
        {
            shaderUtils.setShaderByProgram(children[i], glProgram);
        }
    },
};

module.exports = shaderUtils
