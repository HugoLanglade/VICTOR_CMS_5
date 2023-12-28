import CMS from 'netlify-cms-app';
import { NetlifyCmsBackend } from 'netlify-cms-backend-git-gateway';

CMS.registerBackend('git-gateway', NetlifyCmsBackend);

CMS.registerMediaLibrary(uploadcare);

CMS.init();
