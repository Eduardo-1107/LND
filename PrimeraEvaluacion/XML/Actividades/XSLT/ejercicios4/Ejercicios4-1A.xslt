<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:strip-space elements="*"/>
  <xsl:template match="/">
  <html>
    <head>
      <title>Resultado</title>    
    </head>  
    <body>
      <ol>
        <xsl:apply-templates select="catalogo/libro/autores/autor"/>      
      </ol>
    </body>
  </html>
  </xsl:template>
  <xsl:template match="autor">
    <li><xsl:value-of select="."/></li>  
  </xsl:template>
</xsl:stylesheet>
