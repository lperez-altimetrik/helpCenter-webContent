import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  @Input() src =
    'https://s3-alpha-sig.figma.com/img/9521/b025/c902562d3a282bff2b33cd66078f7c87?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C0B7MQ0nWHWzMoNlvv2k7FFlfVrXebCiC1EfnrpfAe9dyPsBvoAC1FmBVTz7ElTzcpZDHdzOWgMzZlrWXLbj3zeV2sK51MriwNfyq~CiGCEjrMwjVxkYNaERJvQFw700kANLETBxYtpCNcYtxfjivnu~oidjmegFfWNSZKs~EvhvzfY94morJJHEh86856AgspjTuRb6Pgclczk9vUWJ~RnNuWnKBcFuqKXA55GNLUxfmn-ZGgsaGcNvBcll2kMX0BMIT~VRLgPoXT9-pbk8od4P87jG~l-LKcuiBj1ii1B9MQjd1D8xGjzKJVg0RtI~99DHaynyzAlYwsVZQVbWKQ__';
  @Input() title = 'image alt';
}
