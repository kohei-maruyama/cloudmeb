# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0007_auto_20161104_0058'),
    ]

    operations = [
        migrations.AlterField(
            model_name='page',
            name='page_name',
            field=models.CharField(verbose_name='page name', max_length=100, default='page name', choices=[('WHY_CLOUDMEB', 'Why Cloudmeb'), ('PLUG_IN_YOUR_BUSINESS', 'Plug-in your business'), ('PRICING', 'Pricing'), ('SOLUTIONS', 'Solutions'), ('BECOME_A_PARTNER', 'Become a partner'), ('CONTACT_US', 'Contact us'), ('FREQUENTLY_ASKED_QUESTIONS', 'Frequently asked questions'), ('TERMS_OF_USE', 'Terms of use'), ('BOOK_NOW', 'Book now'), ('PRIVACY_POLICY', 'Privacy policy'), ('DYNAMIC_PARTNER', 'Dynamic partner'), ('DYNAMIC_SERVICE', 'Dynamic service'), ('DYNAMIC_PRODUCT', 'Dynamic product')]),
        ),
    ]
