<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:strip-space elements="*"/>
  <xsl:template match="/">
  <html>
    <head>
      <title>Resultado</title>    
    </head>  
    <body>
      <table border="1">
        <tr>
          <th>Nombre</th>
          <th>Año Nacimiento</th>
        </tr>
        <xsl:apply-templates select="catalogo/libro/autores"/>
      </table>
    </body>
  </html>
  </xsl:template>
  <xsl:template match="autor">
  <tr>
    <td><xsl:value-of select="."/></td>  
    <td><xsl:value-of select="./@nacimiento"/></td>  
  </tr>
  </xsl:template>
</xsl:stylesheet>

