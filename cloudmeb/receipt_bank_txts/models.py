from django.db import models
from cloudmeb.utils.i18n import bilingual_field, bilingual_name, bilingual_field_name
from django.utils.translation import ugettext_lazy as _

PAGES = (
    ('WHY_CLOUDMEB', _('Why Cloudmeb')),
    ('PLUG_IN_YOUR_BUSINESS', _('Plug-in your business')),
    ('SOLUTIONS', _('Solutions')),
    ('BECOME_A_PARTNER', _('Become a partner')),
    ('CONTACT_US', _('Contact us')),
    ('FREQUENTLY_ASKED_QUESTIONS', _('Frequently asked questions')),
    ('RECEIPT_BANK_LANDING', _('Receipt Bank Landing Page')),
)

class Receipt_bank_txt(models.Model):
    receipt_bank_txt_id = models.AutoField(primary_key=True)
    receipt_bank_txt_name = models.CharField(verbose_name=_('page name'), max_length=100, choices=PAGES)
    receipt_bank_txt_header_title_en = models.CharField(verbose_name=_('english banner header title'), max_length=300, unique=True)
    receipt_bank_txt_header_title_fr = models.CharField(verbose_name=_('french banner header title'), max_length=300, unique=True)
    receipt_bank_txt_header_subtitle_en = models.CharField(verbose_name=_('english banner header sub title'), max_length=300, unique=True)
    receipt_bank_txt_header_subtitle_fr = models.CharField(verbose_name=_('french banner header sub title'), max_length=300, unique=True)
    receipt_bank_txt_why_title_en = models.CharField(verbose_name=_('english why title'), max_length=300, unique=True)
    receipt_bank_txt_why_title_fr = models.CharField(verbose_name=_('french why title'), max_length=300, unique=True)
    receipt_bank_txt_freeintroduce_title_en = models.CharField(verbose_name=_('english freeintroduce title'), max_length=300, unique=True)
    receipt_bank_txt_freeintroduce_title_fr = models.CharField(verbose_name=_('french freeintroduce title'), max_length=300, unique=True)
    receipt_bank_txt_freeintroduce_text_en = models.TextField(verbose_name=_('english freeintroduce text'))
    receipt_bank_txt_freeintroduce_text_fr = models.TextField(verbose_name=_('french freeintroduce text'))
    receipt_bank_txt_supercharge_title_en = models.CharField(verbose_name=_('english supercharge title'), max_length=300, unique=True)
    receipt_bank_txt_supercharge_title_fr = models.CharField(verbose_name=_('french supercharge title'), max_length=300, unique=True)
    receipt_bank_txt_supercharge_subtitle1_en = models.CharField(verbose_name=_('english supercharge subtitle1'), max_length=300, unique=True)
    receipt_bank_txt_supercharge_subtitle1_fr = models.CharField(verbose_name=_('french supercharge subtitle1'), max_length=300, unique=True)
    receipt_bank_txt_supercharge_subtext1_en = models.TextField(verbose_name=_('english supercharge subtext1'))
    receipt_bank_txt_supercharge_subtext1_fr = models.TextField(verbose_name=_('french supercharge subtext1'))
    receipt_bank_txt_supercharge_subtitle2_en = models.CharField(verbose_name=_('english supercharge subtitle2'), max_length=300, unique=True)
    receipt_bank_txt_supercharge_subtitle2_fr = models.CharField(verbose_name=_('french supercharge subtitle2'), max_length=300, unique=True)
    receipt_bank_txt_supercharge_subtext2_en = models.TextField(verbose_name=_('english supercharge subtext2'))
    receipt_bank_txt_supercharge_subtext2_fr = models.TextField(verbose_name=_('french supercharge subtext2'))
    receipt_bank_txt_supercharge_subtitle3_en = models.CharField(verbose_name=_('english supercharge subtitle3'), max_length=300, unique=True)
    receipt_bank_txt_supercharge_subtitle3_fr = models.CharField(verbose_name=_('french supercharge subtitle3'), max_length=300, unique=True)
    receipt_bank_txt_supercharge_subtext3_en = models.TextField(verbose_name=_('english supercharge subtext3'))
    receipt_bank_txt_supercharge_subtext3_fr = models.TextField(verbose_name=_('french supercharge subtext3'))
    receipt_bank_txt_how_work_title_en = models.CharField(verbose_name=_('english how work title'), max_length=300, unique=True)
    receipt_bank_txt_how_work_title_fr = models.CharField(verbose_name=_('french how work title'), max_length=300, unique=True)
    receipt_bank_txt_start_now_title_en = models.CharField(verbose_name=_('english start now title'), max_length=300, unique=True)
    receipt_bank_txt_start_now_title_fr = models.CharField(verbose_name=_('french start now title'), max_length=300, unique=True)
    receipt_bank_txt_application_free_header_en = models.CharField(verbose_name=_('english application free header'), max_length=300, unique=True)
    receipt_bank_txt_application_free_header_fr = models.CharField(verbose_name=_('french application free header'), max_length=300, unique=True)
    receipt_bank_txt_application_free_subheader_en = models.CharField(verbose_name=_('english application free subheader'), max_length=300, unique=True)
    receipt_bank_txt_application_free_subheader_fr = models.CharField(verbose_name=_('french application free subheader'), max_length=300, unique=True)
    receipt_bank_txt_application_header_en = models.CharField(verbose_name=_('english application header'), max_length=300, unique=True)
    receipt_bank_txt_application_header_fr = models.CharField(verbose_name=_('french application header'), max_length=300, unique=True)
    receipt_bank_txt_application_subheader_en = models.CharField(verbose_name=_('english application subheader'), max_length=300, unique=True)
    receipt_bank_txt_application_subheader_fr = models.CharField(verbose_name=_('french application subheader'), max_length=300, unique=True)

    class Meta:
        verbose_name = _('receipt_bank_txt')
        verbose_name_plural = _('receipt_bank_txts')

    def __str__(self):
        return self.receipt_bank_txt_name

    def is_default(self, this, field):
        return self._meta.get_field(field).get_default() == str(getattr(this, field))

    def save(self, *args, **kwargs):
        super(Receipt_bank_txt, self).save(*args, **kwargs)

