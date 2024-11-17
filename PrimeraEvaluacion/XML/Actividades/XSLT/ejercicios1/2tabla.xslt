<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:strip-space elements="*"/> 
  <xsl:template match="/">
    <html>
      <h1><xsl:value-of select="cifp/@nombre"/></h1>
      <p>Página web:  <a>
       <xsl:attribute name="href">
          <xsl:value-of select="cifp/@web"/>
       </xsl:attribute>
       http://www.cifpcesarmanrique.es/
      </a></p>
      <table border="1">
        <xsl:apply-templates/> 
      </table>
    </html>
  </xsl:template>
    <xsl:template match="ciclo">
      <tr>
        <th><xsl:value-of select="nombre"/></th>
        <th><xsl:value-of select="grado"/></th>
        <th><xsl:value-of select="decretoTitulo/@año"/></th>
      </tr>
    </xsl:template>
</xsl:stylesheet>
