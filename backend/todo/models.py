from django.db import models


class Image(models.Model):
    title = models.CharField(max_length=40)
    image = models.ImageField(upload_to='images', blank=True)

    class Meta:
        verbose_name_plural = 'Images'

    def __str__(self):
        return self.title
