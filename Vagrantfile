# -*- mode: ruby -*-
# vi: set ft=ruby :

# Configuration
APP_HOST = "192.168.50.4"
APP_HOSTNAME = "voter.local"
MOUNT_DIR = "/opt/voter"


Vagrant.configure(2) do |config|

  config.vm.box = "ubuntu/trusty64"
  config.vm.hostname = APP_HOSTNAME

  config.ssh.forward_agent = true

  config.vm.network "forwarded_port", guest: 80, host: 8000
  config.vm.network "private_network", ip: APP_HOST

  config.vm.synced_folder ".", "/vagrant", disabled: true
  config.vm.synced_folder ".", MOUNT_DIR

  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.name = APP_HOSTNAME
    vb.memory = 1024
    vb.cpus = 1
    vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
    vb.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
  end

  config.vm.provision "shell", inline: <<-SHELL

    sudo apt-get install -y libssl-dev openssl libpq-dev nginx

    # Install postgresql

    sudo apt-get install -y postgresql postgresql-contrib

    sudo -u postgres psql -c "CREATE USER voter_user WITH PASSWORD '123';"
    sudo su postgres -c "createdb -O voter_user -Eutf8 voter_db"

    # Install Python

    wget https://www.python.org/ftp/python/3.5.1/Python-3.5.1.tgz
    tar xzvf Python-3.5.1.tgz
    cd Python-3.5.1
    ./configure
    make
    sudo make install
    sudo pip3 install --upgrade pip
    sudo pip3 install -r /opt/voter/requirements.txt

    # Configure locales

    sudo locale-gen ru_RU.UTF-8
    sudo update-locale
    sudo dpkg-reconfigure locales
    sudo timedatectl set-timezone Europe/Moscow

    # Configure nginx

    sudo rm /etc/nginx/sites-enabled/default
    sudo ln -s /opt/voter/etc/nginx.vagrant.example /etc/nginx/sites-enabled/default
    sudo service nginx restart

    SHELL
end
