from django.db import models
from cloudmeb.utils.i18n import bilingual_field, bilingual_name
from django.utils.translation import ugettext_lazy as _

class Packages_table(models.Model):
    packages_table_id = models.AutoField(primary_key=True)
    packages_table_gateway_link = models.TextField(verbose_name=_('gateway link'), max_length=1000, unique=True)
    packages_table_plan = models.CharField(verbose_name=_('package plan items'), max_length=200, unique=True)
    packages_table_description_en = models.TextField(verbose_name=_('english package description'), max_length=1000, unique=True)
    packages_table_description_fr = models.TextField(verbose_name=_('french package description'), max_length=1000, unique=True)
    packages_table_description = bilingual_field('packages_table_description')
    packages_table_retail = models.CharField(verbose_name=_('package retail'), max_length=200, unique=True)
    packages_table_cloudmeb = models.CharField(verbose_name=_('package cloudmeb'), max_length=200, unique=True)
    packages_table_savings = models.CharField(verbose_name=_('package savings'), max_length=200, unique=True)

    class Meta:
        verbose_name = _('packages_table')
        verbose_name_plural = _('packages_tables')

    def __str__(self):
        return self.packages_table_plan

    def is_default(self, this, field):
        return self._meta.get_field(field).get_default() == str(getattr(this, field))

    def save(self, *args, **kwargs):
        super(Packages_table, self).save(*args, **kwargs)
