<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <datos>
      <cuentas>
        <xsl:apply-templates select="listado/cuenta"/>
      </cuentas>  
    </datos>
  </xsl:template>
  <xsl:template match="cuenta">
    <cuenta>
      <xsl:attribute name="dnititular"><xsl:value-of select="titular/@dni"/></xsl:attribute>
      <creacion><xsl:value-of select="fechacreacion"/></creacion>
      <titular><xsl:value-of select="titular"/></titular>
      <saldoactual><xsl:value-of select="saldoactual"/> <xsl:value-of select="saldoactual/@moneda"/></saldoactual>
    </cuenta>  
  </xsl:template>
</xsl:stylesheet>
