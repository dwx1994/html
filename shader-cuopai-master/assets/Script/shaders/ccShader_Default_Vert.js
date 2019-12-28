module.exports =
`
attribute vec4 a_position;
attribute vec2 a_texCoord;
attribute vec4 a_color;
varying vec2 v_texCoord;
varying vec4 v_fragmentColor;
void main()
{
	vec4 tmp_pos = vec4(a_position.x, a_position.y,a_position.z, a_position.w);
    gl_Position = CC_PMatrix * tmp_pos;
    v_fragmentColor = a_color;
    v_texCoord = a_texCoord;
}
` 

