from django.db import models


class Image(models.Model):
    picture = models.ImageField(upload_to='pictures')
    classified = models.CharField(max_length=200)
    uploaded = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "Image has been classified at {}".format(self.uploaded.strftime('%Y-%m-%d %H:%M'))
        
    