<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">  
<xsl:strip-space elements="*"/>
<xsl:template match="/">
  <html>
    <head>
      <title>Biblioteca</title>
    </head>
    <body>
      <h1>Listado con puntuacion</h1>
      <table>
      <tr>
        <th>Posición</th>
        <th>Titulos</th>
        <th>Puntos</th>
      </tr>
        <xsl:apply-templates/>
      </table>
    </body>
  </html>  
</xsl:template>
<xsl:template match="libro">
  <tr>
    <th><xsl:value-of select="position()"/></th>
    <th><xsl:value-of select="titulo"/></th>
    <th><xsl:value-of select="puntos"/></th>
  </tr>
</xsl:template>
</xsl:stylesheet>


